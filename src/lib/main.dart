import 'package:flutter/material.dart';
import 'package:src/app/SelectContent.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyWidget(),
    );
  }
}

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          // サイドバー（NavigationRail）
          NavigationRail(
            destinations: const [
              NavigationRailDestination(
                icon: Icon(Icons.pets),
                label: Text('Animal'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.directions_bus),
                label: Text('Vehicle'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.restaurant),
                label: Text('Foods'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.question_mark),
                label: Text('About'),
              ),
            ],
            selectedIndex: _selectedIndex,
            onDestinationSelected: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
          ),
          SelectContent(index: _selectedIndex)
        ],
      ),
    );
  }
}
