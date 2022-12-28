import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Foods extends ItemPage {
  Foods({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(category: 'foods', name: 'pancake'),
    ItemCard(category: 'foods', name: 'chocolate'),
    ItemCard(category: 'foods', name: 'cookie'),
    ItemCard(category: 'foods', name: 'cotton_candy'),
    ItemCard(category: 'foods', name: 'dumpling'),
    ItemCard(category: 'foods', name: 'hotdog'),
    ItemCard(category: 'foods', name: 'ice_cream'),
    ItemCard(category: 'foods', name: 'lingering_candy'),
    ItemCard(category: 'foods', name: 'macaron'),
    ItemCard(category: 'foods', name: 'popcorn'),
    ItemCard(category: 'foods', name: 'rice_cracker'),
    ItemCard(category: 'foods', name: 'shortcake'),
    ItemCard(category: 'foods', name: 'taiyaki'),
    ItemCard(category: 'foods', name: 'rice_ball'),
    ItemCard(category: 'foods', name: 'burger'),
    ItemCard(category: 'foods', name: 'sandwich'),
    ItemCard(category: 'foods', name: 'sushi'),
    ItemCard(category: 'foods', name: 'ramen'),
  ];
}
