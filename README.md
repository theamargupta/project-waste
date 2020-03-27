# maze


```python
maze = []
"""
#taking file arguments from command line
parser = argparse.ArgumentParser()
#parser.add_argument("input1", help="Input File")
parser.add_argument("sample", help="Output File")
args = parser.parse_args()
"""
#output
f = open('sample.txt','a')   
#input
mazeFile = open('input1', "r")
lines = mazeFile.readlines()
for line in lines:
        line = list(map(int, line.strip().split()))
        row = [c for c in line]
        maze.append(row)

solveMaze(maze)
```
To solve this maze solver because this is the most right one which will help me to get the path because we have to use Q in breadth first search but I you I have done this recursively we can solve May solver recursively. So there is one more thing. We can you also use that for sure. To solve this maze but as it takes it is it doesn't give us the right path to reach, right? So that is the reason I used depth-first search for solving this maze in this we have a print function which will want to print the maze then we have to check. We have to make a list a to 2-d-list. We have to create it by list comprehension then if it doesn't fit appropriately it will go on a show print solution does not exist. Then we have to create one more function to solve the maze. 



In this function, we have to assign the positions of one and zeros. Zeros are the blocks where there is no popularity and one is where the like we can say it's a maze so if you go from start to the end, so it is the one which will want to show us the path. So it's were four by four Matrix. So there will be an input where you have to put the red if it will be a Matrix or five Matrix? So yes, and it will Garner take the integer input. 
```
i used argparse but it didnt worked properly then convert it to exe file and as my os is mac
```

Then in the input we have to give us the Maze and it will gonna print this solve the maze where you can see there will be like the output will be there. Thank you.
