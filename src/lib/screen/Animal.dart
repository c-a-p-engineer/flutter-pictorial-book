import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Animal extends ItemPage {
  Animal({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(name: 'dog'),
    ItemCard(name: 'cat'),
    ItemCard(name: 'fox'),
    ItemCard(name: 'pigeon'),
    ItemCard(name: 'chick'),
    ItemCard(name: 'chicken'),
    ItemCard(name: 'crow'),
    ItemCard(name: 'sparrow'),
    ItemCard(name: 'frog'),
    ItemCard(name: 'snake'),
    ItemCard(name: 'monkey'),
    ItemCard(name: 'pig'),
  ];
}
