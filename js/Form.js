class Form 
{

  constructor() 
  {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    
  }

  hide()
  {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.question.hide();
  }

  display()
  {
    this.title.html("T-rex Runner Game");
    this.title.position(350, 0);

    this.question.html("Please enter your name. " );
    this.question.position(150, 80);
    this.input1.position(150, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      
      this.button.hide();
      player.name = this.input1.value();
      
      contestantCount+=1;
      player.index = contestantCount;
      player.update();
      player.updateCount(contestantCount);
    });
  }
}
