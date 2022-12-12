import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Animals extends ItemPage {
  Animals({super.key});

  @override
  List<StatelessWidget> lists = [
    ItemCard(imagePath: 'dog.png', voicePath: 'dog.mp3'),
    ItemCard(imagePath: 'cat.png', voicePath: 'cat.mp3'),
    ItemCard(imagePath: 'fox.png', voicePath: 'fox.mp3'),
    ItemCard(imagePath: 'pigeon.png', voicePath: 'pigeon.mp3'),
    ItemCard(imagePath: 'chick.png', voicePath: 'chick.mp3'),
    ItemCard(imagePath: 'chicken.png', voicePath: 'chicken.mp3'),
    ItemCard(imagePath: 'crow.png', voicePath: 'crow.mp3'),
    ItemCard(imagePath: 'sparrow.png', voicePath: 'sparrow.mp3'),
    ItemCard(imagePath: 'frog.png', voicePath: 'frog.mp3'),
  ];
}
