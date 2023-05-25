import { API, broadcast } from "./util";
import { followUser } from "./util/api";
import { unfollowUser } from "./util/api";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    // this.handleClick(toggleButton).bind(this);
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // console.log(this.followState);
    if (this.followState === "followed") this.unfollow;
    if (this.followState === "unfollowed") this.follow;
  }

  async follow() {
    // Your code here
    //1) set follow state to unfollowed
    this.followState = "unfollowed";
    //2) call our build utility function (follow)
    //3) set follow state to followed
    await followUser.then(this.followState = "followed");
  }
  
  async unfollow() {
    // Your code here
    //1) set follow state to followed
    this.followState = "followed";
    //2) call our build utility function (unfollow)
    //3) set follow state to unfollowed
    await unfollowUser.then(this.followState = "unfollowed");
  }

  render() {
    switch (this.followState) {
      // Your code here
      case (this.followState === "followed"): {
        console.log(this.followState);
      }
      case (this.followState === "unfollowed"): {
        console.log(this.followState);
      }
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
