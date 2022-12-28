import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

class ItemCard extends StatefulWidget {
  ItemCard({super.key, required this.category, required this.name});

  final String category;
  final String name;

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
            player.play(
                AssetSource("${widget.category}/voices/${widget.name}.mp3"));
          },
          child: RotationTransition(
            turns: _animation,
            child: Image.asset(
                "assets/${widget.category}/images/${widget.name}.png"),
          ),
        ),
      ),
    );
  }
}
