# style-template

## ユーザーがカスタマイズする際の手順

* [Use this template] ボタンでこのリポジトリをコピー。
* `style.yml` を編集。
* しばらくすると `gh-pages` ブランチに `style.json` がコミットされるので、Geolonia Maps で表示する場合は、その URL を以下のような感じで指定してください。。

```
<div data-style="<style.json の URL>"></div>
```

例: https://codepen.io/miya0001/pen/bGRKJgV

## この方法によるメリット

* スタイルを YAML で記述できるようになったことで、コメントを入れられるようになった。
* 変数を使えるようになり、レイヤー数が増えてもデザインしやすくなったり、難解な Expression を再利用できるようになった。
* ユーザーがデザインをカスタマイズするためのステップが簡単になった。
* 外部ファイルの読み込みが可能になったことで、レイヤーごとにファイルを分割できるようになった。

## 関連

このリポジトリは、以下で開発中のツールを GitHub Actions で実行して、Mapbox GL JS ベースのベクトルタイルのスタイルを、JSON ではなく YAML で書けるようにしています。

https://github.com/geolonia/charites
