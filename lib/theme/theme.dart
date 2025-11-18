import 'package:flutter/material.dart';

final themeDark = ThemeData(
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
);
