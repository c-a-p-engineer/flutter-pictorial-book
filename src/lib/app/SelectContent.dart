import 'package:flutter/material.dart';
import 'package:src/screen/About.dart';
import 'package:src/screen/Animals.dart';

/// Select Content Main Display
class SelectContent extends StatelessWidget {
  const SelectContent({super.key, required this.index});

  final int index;

  @override
  Widget build(BuildContext context) {
    List<Widget> pages = [Animals(), About()];
    if (pages.length <= index) {
      return pages[0];
    }
    return pages[index];
  }
}
