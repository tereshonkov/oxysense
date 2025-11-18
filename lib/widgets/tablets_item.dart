import 'package:flutter/material.dart';

class ItemTablets extends StatefulWidget {
  const ItemTablets({super.key, required this.name});

  final String name;

  @override
  State<ItemTablets> createState() => _ItemTabletsState();

}

class _ItemTabletsState extends State<ItemTablets> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(vertical: 8.0),
      title: Text(widget.name, style: theme.textTheme.bodySmall),
      trailing: const Icon(Icons.arrow_forward_ios, color: Color(0xFF59CECF)),
      onTap: () {
        Navigator.of(context).pushNamed('/details', arguments: widget.name);
      },
    );
  }
}
