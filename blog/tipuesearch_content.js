var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","title":"About","url":"./pages/about/","tags":"misc"},{"text":"上課筆記 1.下載mini2016fall.7z工具 2.到mdecourse的2016fallCADP點擊fork 3.建立自己的作業倉儲，組長還須建立2016fallcadp_ag8倉儲 4.在倉儲建立gh-pages分支 5.將組別倉儲clone下來，切換到gh-pages分支 6.使用git submodule add -b gh-pages 指令將組員的作業倉儲加入子模組 7.每周定時使用 (1) git submodule init (2)git submodule update和 (3)git submodule foreach \"(git checkout gh-pages; git pull)&\"來更新 8.設定shareX的儲存位置 (1)Application settings (2)path選擇想儲存的位置即可 9.使用solvespace練習繪製零件 零件繪製作業 2016-11-09 19-44-34 from 林嘉文 on Vimeo . 四連桿 Solvespace 四連桿圖 四連桿.csv (請以滑鼠右鍵存檔) /四連桿.slvs (請以滑鼠右鍵存檔) 四連桿路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/四連桿路徑.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() solvespace軟體練習 Extrude (平行長出) Extrude (除料) Lathe (旋轉繞行長出或除料) Untitled from 林嘉文 on Vimeo . Untitled from 林嘉文 on Vimeo . Untitled from 林嘉文 on Vimeo . Assembly (零件組立) -2 from 林嘉文 on Vimeo . -1 from 林嘉文 on Vimeo . 3.Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 多連桿路徑 from 林嘉文 on Vimeo . solvespace作業組裝 零件 組合圖 方塊組合 from 林嘉文 on Vimeo . 3D印表機組裝 零件 印表機 組裝影片 3DPR-1 from 林嘉文 on Vimeo . 3DPR-2 from 林嘉文 on Vimeo . onshape連桿組裝 onshape連桿-1 from 林嘉文 on Vimeo . onshape連桿-2 from 林嘉文 on Vimeo .","title":"01/22電腦輔助設計課程總結","url":"./0122dian-nao-fu-zhu-she-ji-ke-cheng-zong-jie.html","tags":"HW"},{"text":"Solvespace 四連桿圖 四連桿.csv (請以滑鼠右鍵存檔) /四連桿.slvs (請以滑鼠右鍵存檔)","title":"10/27四連桿","url":"./1027si-lian-gan.html","tags":"HW"},{"text":"window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/四連桿路徑.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"11/17  四連桿路徑與Brython","url":"./1117-si-lian-gan-lu-jing-yu-brython.html","tags":"HW"},{"text":"sovlespace 1.parts(零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出) Extrude (除料) Lathe (旋轉繞行長出或除料) Untitled from 林嘉文 on Vimeo . Untitled from 林嘉文 on Vimeo . Untitled from 林嘉文 on Vimeo . 2. Assembly (零件組立) -2 from 林嘉文 on Vimeo . -1 from 林嘉文 on Vimeo . 3.Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 多連桿路徑 from 林嘉文 on Vimeo .","title":"11/24  Solvespace作業練習","url":"./1124-solvespacezuo-ye-lian-xi.html","tags":"HW"},{"text":"零件 組合圖 方塊組合 from 林嘉文 on Vimeo .","title":"12/01  Solvespace作業組合","url":"./1201-solvespacezuo-ye-zu-he.html","tags":"HW"},{"text":"零件 印表機 組裝影片 3DPR-1 from 林嘉文 on Vimeo . 3DPR-2 from 林嘉文 on Vimeo .","title":"12/22 印表機","url":"./1222-yin-biao-ji.html","tags":"HW"},{"text":"onshape連桿-1 from 林嘉文 on Vimeo . onshape連桿-2 from 林嘉文 on Vimeo .","title":"12/29  onshape連桿組合","url":"./1229-onshapelian-gan-zu-he.html","tags":"HW"},{"text":"上課筆記 1.下載mini2016fall.7z工具 2.到mdecourse的2016fallCADP點擊fork 3.建立自己的作業倉儲，組長還須建立2016fallcadp_ag8倉儲 4.在倉儲建立gh-pages分支 5.將組別倉儲clone下來，切換到gh-pages分支 6.使用git submodule add -b gh-pages 指令將組員的作業倉儲加入子模組 7.每周定時使用 (1) git submodule init (2)git submodule update和 (3)git submodule foreach \"(git checkout gh-pages; git pull)&\"來更新 8.設定shareX的儲存位置 (1)Application settings (2)path選擇想儲存的位置即可 9.使用solvespace練習繪製零件","title":"40423123 筆記","url":"./40423123-bi-ji.html","tags":"Misc"},{"text":"2016-11-09 19-44-34 from 林嘉文 on Vimeo . 心得 : 這是我第一次用這個軟體 但其實跟Solidworks差不多 所以很快就上手了","title":"40423123 作業","url":"./40423123-zuo-ye.html","tags":"Misc"}]};