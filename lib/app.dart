import 'package:flutter/material.dart';
import 'package:oxysense/routes/routes.dart';
import 'package:oxysense/theme/theme.dart';

class OxySenseApp extends StatelessWidget {
  const OxySenseApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter OxySense',
      theme: themeDark,
      routes: routes,
    );
  }
}