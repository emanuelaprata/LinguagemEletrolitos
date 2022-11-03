# Linguagem dos eletrólitos

## Get started (locally)

- Instalar as dependencias
```
$ yarn
```

- Criar as pastas nativas
```
$ npx expo prebuild
```

- Rodar no Android
```
$ yarn android
```

- Rodar no iOS
```
$ yarn ios
```

## Build

- Check and update (if needed) version, buildNumber and versionCode on app.json file

- Check and update (if needed) the SERVER_URL on env.json file

- Android (.apk)

```bash
$ expo build:android -t apk
```

- Android (PlayStore)

```bash
$ expo build:android -t app-bundle
```

- IOS

```bash
$ expo build:ios -t archive
```