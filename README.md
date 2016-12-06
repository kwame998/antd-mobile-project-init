该项目用于在使用`antd-mobile`的项目快速初始化，开发调试时代码修改浏览器能自刷新！！

### 开发调试 ###
	npm start

### 发布代码 ###
	npm run build

### 目录树： ###

	├─gulpfile.js-----------------------------------webpack开发以及打包发布设置
	├─package.json----------------------------------安装依赖
	├─template.html---------------------------------hmtl模板
	├─webpack.config.js-----------------------------webpack公用设置
	├─dist------------------------------------------打包发布文件
	├─mock------------------------------------------mock数据
	└─src-------------------------------------------开发代码
	    │  main.js----------------------------------webpack打包主要入口
	    │  router.js--------------------------------router设置
	    │  
	    ├─css
	    │      index.css----------------------------自定义css（这文件在main.js中引入了）
	    │      
	    ├─lib---------------------------------------静态文件
	    │  └─tabBarSvg------------------------------脚部tabBar需要使用是svg
	    │          finance.svg
	    │          finance_select.svg
	    │          index.svg
	    │          index_select.svg
	    │          mine.svg
	    │          mine_select.svg
	    │          report.svg
	    │          report_select.svg
	    │          
	    ├─page--------------------------------------router编写页面
	    │  ├─finance
	    │  │      finance.js
	    │  │      
	    │  ├─index
	    │  │      index.js
	    │  │      
	    │  ├─mine
	    │  │      mine.js
	    │  │      
	    │  ├─public
	    │  │      footBar.js
	    │  │      layOut.js
	    │  │      svg.js
	    │  │      
	    │  ├─report
	    │  │      report.js
	    │  │      
	    │  └─svg-file
	    │          index.js
	    │          
	    ├─redux-------------------------------------redux管理
	    │      action.js
	    │      reducers.js
	    │      store.js
	    │      
	    └─system------------------------------------辅助方法封装
	            api.js
	            apiHelper.js------------------------获取数据方法封装（可以选择去jquery化）
	            system.js
	            tool.js
	            
