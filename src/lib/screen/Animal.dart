import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Animal extends ItemPage {
  Animal({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(category: 'animal', name: 'dog'),
    ItemCard(category: 'animal', name: 'cat'),
    ItemCard(category: 'animal', name: 'fox'),
    ItemCard(category: 'animal', name: 'pigeon'),
    ItemCard(category: 'animal', name: 'chick'),
    ItemCard(category: 'animal', name: 'chicken'),
    ItemCard(category: 'animal', name: 'crow'),
    ItemCard(category: 'animal', name: 'sparrow'),
    ItemCard(category: 'animal', name: 'frog'),
    ItemCard(category: 'animal', name: 'snake'),
    ItemCard(category: 'animal', name: 'monkey'),
    ItemCard(category: 'animal', name: 'pig'),
  ];
}
