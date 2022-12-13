import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';

class ItemPage extends StatelessWidget {
  ItemPage({super.key});

  List<StatefulWidget> lists = [];

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: GridView.builder(
        itemCount: lists.length,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
        ),
        itemBuilder: (context, index) {
          return Card(
            child: lists[index],
          );
        },
      ),
    );
  }
}
