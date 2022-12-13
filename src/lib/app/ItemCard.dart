import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

class ItemCard extends StatefulWidget {
  ItemCard({super.key, required this.imagePath, required this.voicePath});
  final String imagePath;
  final String voicePath;

  _ItemCardState createState() => _ItemCardState();
}

class _ItemCardState extends State<ItemCard> with TickerProviderStateMixin {
  bool flag = false;
  _click() async {
    setState(() {
      flag = !flag;
    });
  }

  @override
  Widget build(BuildContext context) {
    final player = AudioPlayer();
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: GridTile(
        child: GestureDetector(
          onTap: () {
            _click();
            player.play(AssetSource("voices/${widget.voicePath}"));
            Future.delayed(Duration(milliseconds: 100), () {
              _click();
              Future.delayed(Duration(milliseconds: 100), () {
                _click();
                Future.delayed(Duration(milliseconds: 100), () {
                  _click();
                });
              });
            });
          },
          child: AnimatedRotation(
            turns: flag ? 0.15 : 0.0,
            duration: Duration(milliseconds: 100),
            child: Image.asset("assets/images/${widget.imagePath}"),
          ),
        ),
      ),
    );
  }
}
