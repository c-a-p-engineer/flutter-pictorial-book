import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

class ItemCard extends StatefulWidget {
  ItemCard({super.key, required this.imagePath, required this.voicePath});
  final String imagePath;
  final String voicePath;

  @override
  _ItemCardState createState() => _ItemCardState();
}

class _ItemCardState extends State<ItemCard> with TickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 2),
  );

  late final Animation<double> _animation = CurvedAnimation(
    parent: _controller,
    curve: Curves.elasticOut,
  );

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: GridTile(
        child: GestureDetector(
          onTap: () {
            _controller.reset();
            _controller.forward();

            final AudioPlayer player = AudioPlayer();
            player.play(AssetSource("voices/${widget.voicePath}"));
          },
          child: RotationTransition(
            turns: _animation,
            child: Image.asset("assets/images/${widget.imagePath}"),
          ),
        ),
      ),
    );
  }
}
