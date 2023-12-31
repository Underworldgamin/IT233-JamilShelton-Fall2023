
/* ============ */
/* Examples     */
/* ============ */

function addExample()
{
   alert(5 + 7);
}

function multiplyExample()
{
   alert(5 * 7);
}

function makeVariables()
{
   var spam = "Spam in a can";
   alert(spam);
}

function simpleIf()
{
   var temp = 72;

   if(temp > 85)
   {
      alert("It's hot outside!");
   }
   else if(temp > 65)
   {
      alert("It's warm outside!");
   }
   else if(temp > 50)
   {
      alert("It's cool outside!");
   }
   else
   {
      alert("It's cold outside!");
   }
}

function switchStatements()
{
   var temp = 72;

   switch(temp)
   {
      case 90:
         alert("It's hot outside!");
         break;
      case 72:
         alert("It's warm outside!");
         break;
      default:
         alert("It's some temperature outside!");
   }
}

function threeLoops()
{
   var count = 1;

   while(count <= 10)
   {
      if(count == 5)
      {
         alert("Hello! First time.");
      }
      count = count + 1;
   }

   count = 1;

   do
   {
      if(count == 5)
      {
         alert("Hello! Second time.");
      }
      count = count + 1;
   } while(count <= 10);

   for(var count = 1; count <= 10; count++)
   {
      if(count == 5)
      {
         alert("Hello! Third time.");
      }
   }
}

/* ============ */
/* Lab Problems */
/* ============ */

function problem01()
{
   var result = 5 - 7;
   alert( + result);
}

function problem02()
{
   var result = 7 / 5;
   alert(+result);
}

function problem03()
{
   var eggs = 42;
   alert(+ eggs);
}

function problem04()
{
   var grade = 97;
   if (grade > 90) {
      alert("The letter grade is A");
   } else if (grade > 80) {
      alert("The letter grade is B");
   } else if (grade > 70) {
      alert("The letter grade is C");
   } else if (grade > 60) {
      alert("The letter grade is D");
   } else {
      alert("The letter grade is F");
   }

}

function problem05()
{
   for (var i = 0; i <= 99; i++) {
      if (i === 42) {
         alert("42!");
         break;
      }
   }
}
