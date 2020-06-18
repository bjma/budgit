# Budgit :money_with_wings:
Budgit is a simple budgeting app built on React Native that I hacked over the summer of 2020 during shelter-in-place. 

I designed it for college students navigating the realm of financial responsibility, a struggle that I had to overcome when I started living off-campus. 

No longer able to rely on the dining hall for my meals, I often found my checking account near empty, unsure if I spent that money on groceries, subscription services, or nonessentials. So, in hopes of learning how to maintain a budget, I started recording my spending habits on the Notes app, but I found the process to be slow and a bit tedious. I built this app to automate this process while learning React Native.

## Installing the project
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