import 'package:flutter/material.dart';

class TabletContainer extends StatelessWidget {
  final String title;
  final List<Widget> children;

  const TabletContainer({
    super.key,
    required this.title,
    required this.children,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Container(
      margin: const EdgeInsets.all(16.0),
      padding: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: Colors.white12,
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: const Color(0xFF59CECF), width: 1.5),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(title, style: theme.textTheme.bodyMedium),
          const SizedBox(height: 12.0),
          ...children,
        ],
      ),
    );
  }
}
