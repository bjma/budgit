# Budgit :money_with_wings:
Budgit is a small iOS budgeting app I hacked over the summer of 2020 during shelter-in-place. 

I designed it for college students navigating the realm of financial responsibility, like me.

## Viewing the project
Before running the project, make sure you have React Native installed:

``` bash
$ npm install -g react-native
```

Once you have that done, just clone the repository into your chosen directory:

``` bash
$ git clone https://github.com/bjma/budgit
```

Then, in the project directory, install `npm` dependencies:

``` bash
$ npm install
```

And install other dependencies in the `ios` directory:

``` bash
$ gem install cocoapods
$ pod install
```

After that, you can just run `react-native run-ios` in the project directory to view the project on XCode's iOS simulator.

**NOTE**: There may be some issues with `cocoapods` and the XCode project files. To solve, just delete the `build` folder in `ios` and run `pod install` again (this might take a while).

## Credits
* [Brian Ma](https://www.linkedin.com/in/brian-j-ma/) - Software engineering
* [Aileen Chen](https://www.linkedin.com/in/aileenschen/) - UI design