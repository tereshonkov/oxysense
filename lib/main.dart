import 'package:flutter/material.dart';
import 'package:oxysense/widgets/tablets_wrapper.dart';
import 'package:oxysense/widgets/tablets_item.dart';

void main() {
  runApp(const OxySenseApp());
}

class OxySenseApp extends StatelessWidget {
  const OxySenseApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Color(0xFF59CECF)),
        scaffoldBackgroundColor: const Color(0xFF1B263B),
        useMaterial3: true,
        textTheme: const TextTheme(
          bodyLarge: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 26,
          ),
          bodyMedium: TextStyle(
            color: Color(0xFF59CECF),
            fontWeight: FontWeight.bold,
            fontSize: 22,
          ),
          bodySmall: TextStyle(color: Colors.white54, fontSize: 16),
        ),
      ),
      routes: {
        '/': (context) => const Tablets(title: 'Tablets Page'),
        '/details': (context) => const TabletDetails(title: 'Tablet Details Page'),
      },
    );
  }
}

class Tablets extends StatefulWidget {
  const Tablets({super.key, required this.title});

  final String title;

  @override
  State<Tablets> createState() => _TabletsState();
}

class _TabletsState extends State<Tablets> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: theme.colorScheme.inversePrimary,
        centerTitle: true,
        title: Text(widget.title, style: theme.textTheme.bodyLarge),
      ),
      body: ListView(
        children: [
          WrapperTabletBlock(
            title: 'Ранок 09:00',
            children: List.generate(
              3,
              (i) =>
                  Column(children: [ItemTablets(name: 'Таблетка ${i + 1}A')]),
            ),
          ),
          WrapperTabletBlock(
            title: 'Обід 12:00',
            children: List.generate(
              3,
              (i) =>
                  Column(children: [ItemTablets(name: 'Таблетка ${i + 1}A')]),
            ),
          ),
          WrapperTabletBlock(
            title: 'Вечеря 18:00',
            children: List.generate(
              3,
              (i) =>
                  Column(children: [ItemTablets(name: 'Таблетка ${i + 1}A')]),
            ),
          ),
          WrapperTabletBlock(
            title: 'Добові 20:00',
            children: List.generate(
              3,
              (i) =>
                  Column(children: [ItemTablets(name: 'Таблетка ${i + 1}A')]),
            ),
          ),
        ],
      ),
    );
  }
}

class TabletDetails extends StatefulWidget {
  const TabletDetails({super.key, required this.title});

  final String title;

  @override
  State<TabletDetails> createState() => _TabletDetailsScreen();
}

class _TabletDetailsScreen extends State<TabletDetails> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final String tabletName =
        ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: theme.colorScheme.inversePrimary,
        centerTitle: true,
        title: Text(widget.title, style: theme.textTheme.bodyLarge),
      ),
      body: Center(
        child: Text(
          'Details for $tabletName',
          style: theme.textTheme.bodyMedium,
        ),
      ),
    );
  }
}
