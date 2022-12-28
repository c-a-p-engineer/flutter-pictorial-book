import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Vehicle extends ItemPage {
  Vehicle({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(category: 'vehicle', name: 'train'),
    ItemCard(category: 'vehicle', name: 'bullet_train'),
    ItemCard(category: 'vehicle', name: 'bus'),
    ItemCard(category: 'vehicle', name: 'police_car'),
    ItemCard(category: 'vehicle', name: 'ambulance'),
    ItemCard(category: 'vehicle', name: 'fire_engine'),
    ItemCard(category: 'vehicle', name: 'plane'),
    ItemCard(category: 'vehicle', name: 'helicopter'),
  ];
}
