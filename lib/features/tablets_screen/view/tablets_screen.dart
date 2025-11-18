import 'package:flutter/material.dart';
import 'package:oxysense/features/tablets_screen/widgets/list_view_items.dart';

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
        children: childrenItems,
      ),
    );
  }
}