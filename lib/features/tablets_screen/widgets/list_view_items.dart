import 'package:flutter/material.dart';
import 'package:oxysense/features/tablet_item/view/tablet_item.dart';
import 'package:oxysense/features/tablets_container/view/tablet_container.dart';

final childrenItems = [
  TabletContainer(
    title: 'Ранок 09:00',
    children: List.generate(
      3,
      (i) => Column(children: [TabletItem(name: 'Таблетка ${i + 1}A')]),
    ),
  ),
  TabletContainer(
    title: 'Обід 12:00',
    children: List.generate(
      3,
      (i) => Column(children: [TabletItem(name: 'Таблетка ${i + 1}A')]),
    ),
  ),
  TabletContainer(
    title: 'Вечеря 18:00',
    children: List.generate(
      3,
      (i) => Column(children: [TabletItem(name: 'Таблетка ${i + 1}A')]),
    ),
  ),
  TabletContainer(
    title: 'Добові 20:00',
    children: List.generate(
      3,
      (i) => Column(children: [TabletItem(name: 'Таблетка ${i + 1}A')]),
    ),
  ),
];
