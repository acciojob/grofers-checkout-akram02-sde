const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices = document.querySelectorAll(".price");

const getSum = () => {
//Add your code here
  let sum = 0;
  prices.forEach((price) => {
	  sum += Number(price.innerText);
  })
  const newRow = document.createElement('tr')
	newRow.innerText = sum
	newRow.id = "sum"
	const table = document.querySelectorAll('table')[0]
	table.appendChild(newRow)
};

getSumBtn.addEventListener("click", getSum);

