const n=9;
let sudoku = new Array(n);
for (let i=0;i<n;i++)
{
    sudoku[i] = new Array(n);
}
let Solve = document.getElementById("solve");
let Reset = document.getElementById("reset");

function delallelem()
{
    for (let i=0;i<n;i++)
    {
        for (let j=0;j<n;j++)
        {
            sudoku[i][j]=0;
            document.getElementById("r" + `${i}` + "c" + `${j}`).value = "";
            document.getElementById("r" + `${i}` + "c" + `${j}`).style.color = "black";
        }
    }
}
function isvalid(row,col,nums)
{
    if (nums==0) return 0;
    let r =parseInt(row);
    let c =parseInt(col);
    let num = parseInt(nums);
    for (let i=0;i<n;i++)
    {
        if (sudoku[r][i]==num || sudoku[i][c]==num || sudoku[Math.floor((r / 3)) * 3 + Math.floor(i / 3)][Math.floor((c / 3)) * 3 + Math.floor(i % 3)]==num) return 0;
    }
    return 1;
}
function backtrack()
{
    for (let i=0;i<9;i++)
    {
        for (let j=0;j<9;j++)
        {
            if (sudoku[i][j]==0)
            {
                for (let c=1 ;c<=9; c++)
                {
                    if (isvalid(i,j,c)==1)
                    {
                        sudoku[i][j]=c;
                        if (backtrack()==1) return 1;
                        else sudoku[i][j]=0;
                    }
                }
                return 0;
            }
        }
    }
    return 1;
}
Solve.addEventListener("click" , function(){
    document.getElementById("flex").innerHTML = "Here is your solution! press reset to clear";
    for (let i=0;i<n;i++)
    {
        for (let j=0;j<n;j++)
        {
            sudoku[i][j]=0;
            let elem =  document.getElementById("r" + `${i}` + "c" + `${j}`).value;
            if (elem!="")
            {
                sudoku[i][j] = elem;
            }
            else
            {
                document.getElementById("r" + `${i}` + "c" + `${j}`).style.color = "red";
            }
        }
    }
  
    backtrack();
    for (let i=0;i<n;i++)
    {
        for (let j=0;j<n;j++)
        {
            document.getElementById("r" + `${i}` + "c" + `${j}`).value = sudoku[i][j];
        }
    }
});
Reset.addEventListener("click",function(){
    document.getElementById("flex").innerHTML = "Enter the input in given couloums and click solve";
    return delallelem();
});
