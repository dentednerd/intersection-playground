import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

class WindowRoot extends Component {
  state = {
    header: '',
  };

  handleStageOne = event => {
    if (event.isIntersecting) {
      this.setState({
        header: 'skyblue'
      })
    } else return
  };

  handleStageTwo = event => {
    if (event.isIntersecting) {
      this.setState({
        header: 'blueviolet'
      })
    } else return
  };

  handleStageThree = event => {
    if (event.isIntersecting) {
      this.setState({
        header: 'lavender'
      })
    } else return
  };

  handleStageFour = event => {
    if (event.isIntersecting) {
      this.setState({
        header: 'purple'
      })
    } else return
  };

  render() {
    return (
      <div className="windowRoot">
        <div className={`header ${this.state.header}`}>
          {this.state.header}
        </div>
        <div className="body">
          <Observer onChange={this.handleStageOne}>
            <div className="box stageOne" />
          </Observer>
          <div className="interstitial violet" />
          <Observer onChange={this.handleStageTwo}>
            <div className="box stageTwo" />
          </Observer>
          <div className="interstitial blue">
            <div className="hidden" />

            <p>It's a super day, so why not make a beautiful sky? With something so strong, a little bit can go a long way. If what you're doing doesn't make you happy - you're doing the wrong thing. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. Just let your mind wander and enjoy. This should make you happy. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.</p>

            <p>See how easy it is to create a little tree right in your world. Work on one thing at a time. Don't get carried away - we have plenty of time. Just let this happen. We just let this flow right out of our minds.</p>

            <p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Making all those little fluffies that live in the clouds. If you do too much it's going to lose its effectiveness. This is unplanned it really just happens.</p>

            <p>Automatically, all of these beautiful, beautiful things will happen. Son of a gun. Just think about these things in your mind and drop em' on canvas. That's what makes life fun. That you can make these decisions. That you can create the world that you want.</p>

            <p>We don't have to be concerned about it. We just have to let it fall where it will. Have fun with it. We'll put some happy little leaves here and there. Let's get wild today. Talent is a pursued interest. That is to say, anything you practice you can do. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red.</p>

            <p>Brown is such a nice color. Every time you practice, you learn more. Let's give him a friend too. Everybody needs a friend.</p>

            <p>See. We take the corner of the brush and let it play back-and-forth. Maybe there's a happy little waterfall happening over here. Don't fight it, use what happens.</p>
            <p>It's a super day, so why not make a beautiful sky? With something so strong, a little bit can go a long way. If what you're doing doesn't make you happy - you're doing the wrong thing. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. Just let your mind wander and enjoy. This should make you happy. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.</p>

            <p>See how easy it is to create a little tree right in your world. Work on one thing at a time. Don't get carried away - we have plenty of time. Just let this happen. We just let this flow right out of our minds.</p>

            <p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Making all those little fluffies that live in the clouds. If you do too much it's going to lose its effectiveness. This is unplanned it really just happens.</p>

            <p>Automatically, all of these beautiful, beautiful things will happen. Son of a gun. Just think about these things in your mind and drop em' on canvas. That's what makes life fun. That you can make these decisions. That you can create the world that you want.</p>

            <p>We don't have to be concerned about it. We just have to let it fall where it will. Have fun with it. We'll put some happy little leaves here and there. Let's get wild today. Talent is a pursued interest. That is to say, anything you practice you can do. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red.</p>

            <p>Brown is such a nice color. Every time you practice, you learn more. Let's give him a friend too. Everybody needs a friend.</p>

            <p>See. We take the corner of the brush and let it play back-and-forth. Maybe there's a happy little waterfall happening over here. Don't fight it, use what happens.</p>

            <div className="hidden" />
          </div>
          <Observer onChange={this.handleStageThree}>
            <div className="box stageThree" />
          </Observer>
          <div className="interstitial violet" />
          <Observer onChange={this.handleStageFour}>
            <div className="box stageFour" />
          </Observer>
        </div>
      </div>
    );
  }
}

export default WindowRoot
