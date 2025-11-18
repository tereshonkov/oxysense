import 'package:oxysense/features/tablet_item_screen/view/tablet_item_screen.dart';
import 'package:oxysense/features/tablets_screen/view/tablets_screen.dart';

final routes = {
  '/': (context) => const Tablets(title: 'Tablets Page'),
  '/details': (context) => const TabletItemScreen(title: 'Tablet Details Page'),
};
