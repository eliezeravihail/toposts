#temp code
import re
res = []
def calcSnakeShed(fro ,to):
    if fro >= to:
        return 
    res.append(f"{fro}-{fro+1}")
    calcSnakeShed(fro+1,to)    
    if fro < to-1 :
        res.append(f"{fro}--{fro+2}")
        calcSnakeShed(fro+2,to)

calcSnakeShed(0,4)
res.sort(key=lambda x:int(re.split("-+",x)[0]))
for item in res:
    print(item) 
