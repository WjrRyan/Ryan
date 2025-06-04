# 项目简介

本仓库用于存放个人学习记录、工作文档以及一些实验性的 Python 代码。

## 目录说明

- `Python/`：包含若干数据分析相关的 Jupyter Notebook 和脚本，其中 `calculator` 目录内是一个示例计算器项目，提供简单的命令行计算功能及配套的单元测试。
- `Note/`、`Obsidian Vault/`：日常笔记和备忘录文件。
- `WorkDoc/`：工作相关文档。
- `static-page/`：一个示例静态网页，可直接在浏览器中打开 `index.html` 查看。

## 使用方法

### 运行 calculator

进入 `Python/calculator` 目录后，可以在命令行中执行：

```bash
python calculator.py "2 + 3"
```

若要运行单元测试：

```bash
python -m unittest
```

### 浏览静态页面

直接用浏览器打开 `static-page/index.html` 即可。

### Jupyter Notebook

仓库中的笔记本依赖常见的 Python 数据科学库，如 `pandas`、`matplotlib` 等，可按需在本地环境中安装后使用。

