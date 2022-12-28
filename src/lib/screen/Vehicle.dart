import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Vehicle extends ItemPage {
  Vehicle({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(name: 'train'),
    ItemCard(name: 'bullet_train'),
    ItemCard(name: 'bus'),
    ItemCard(name: 'police_car'),
    ItemCard(name: 'ambulance'),
    ItemCard(name: 'fire_engine'),
    ItemCard(name: 'plane'),
    ItemCard(name: 'helicopter'),
  ];
}
