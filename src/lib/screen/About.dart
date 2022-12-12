import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class About extends StatelessWidget {
  About({super.key});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const Text('作者：こぴぺたん'),
          InkWell(
            onTap: () {
              _launchUrl("https://twitter.com/c_a_p_engineer");
            },
            child: const Text('Twitter',
                style: TextStyle(color: Color.fromARGB(255, 0, 4, 255))),
          ),
          const Text('素材提供'),
          const Text('画像：イラストトレイン'),
          InkWell(
            onTap: () {
              _launchUrl("https://illustrain.com/");
            },
            child: const Text('https://illustrain.com/',
                style: TextStyle(color: Color.fromARGB(255, 0, 4, 255))),
          ),
          const Text('音声：音読さん'),
          InkWell(
            onTap: () {
              _launchUrl("https://ondoku3.com/ja/");
            },
            child: const Text('https://ondoku3.com/ja/',
                style: TextStyle(color: Color.fromARGB(255, 0, 4, 255))),
          ),
        ],
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    if (!await launchUrl(Uri.parse(url))) {
      throw 'Could not launch $url';
    }
  }
}
