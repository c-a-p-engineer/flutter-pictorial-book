import 'package:flutter/material.dart';
import 'package:src/app/ItemCard.dart';
import 'package:src/app/ItemPage.dart';

class Animals extends ItemPage {
  Animals({super.key});

  @override
  List<StatefulWidget> lists = [
    ItemCard(imagePath: 'dog.png', voicePath: 'dog.mp3'),
    ItemCard(imagePath: 'cat.png', voicePath: 'cat.mp3'),
    ItemCard(imagePath: 'fox.png', voicePath: 'fox.mp3'),
    ItemCard(imagePath: 'pigeon.png', voicePath: 'pigeon.mp3'),
    ItemCard(imagePath: 'chick.png', voicePath: 'chick.mp3'),
    ItemCard(imagePath: 'chicken.png', voicePath: 'chicken.mp3'),
    ItemCard(imagePath: 'crow.png', voicePath: 'crow.mp3'),
    ItemCard(imagePath: 'sparrow.png', voicePath: 'sparrow.mp3'),
    ItemCard(imagePath: 'frog.png', voicePath: 'frog.mp3'),
    ItemCard(imagePath: 'snake.png', voicePath: 'snake.mp3'),
    ItemCard(imagePath: 'monkey.png', voicePath: 'monkey.mp3'),
    ItemCard(imagePath: 'pig.png', voicePath: 'pig.mp3'),
  ];
}
