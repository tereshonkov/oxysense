import 'package:flutter/material.dart';

class TabletItemScreen extends StatefulWidget {
  const TabletItemScreen({super.key, required this.title});

  final String title;

  @override
  State<TabletItemScreen> createState() => _TabletDetailsScreen();
}

class _TabletDetailsScreen extends State<TabletItemScreen> {
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