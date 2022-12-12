import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

class ItemCard extends StatelessWidget {
  const ItemCard({super.key, required this.imagePath, required this.voicePath});
  final String imagePath;
  final String voicePath;

  @override
  Widget build(BuildContext context) {
    final player = AudioPlayer();
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: GridTile(
        child: GestureDetector(
          onTap: () {
            player.play(DeviceFileSource("assets/voice/$voicePath"));
          },
          child: Image.asset("assets/images/$imagePath"),
        ),
      ),
    );
  }
}
