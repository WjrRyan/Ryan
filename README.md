# 项目简介

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

本仓库用于存放个人学习记录、工作文档以及一些实验性的 Python 代码。这是一个持续更新的知识库，包含了各种学习笔记、工作文档和示例代码。

## 目录说明

- `Python/`：Python 相关代码和项目
  - `calculator/`：命令行计算器项目，包含核心功能和单元测试
  - `notebooks/`：Jupyter Notebook 文件，主要用于数据分析和可视化
  - `scripts/`：实用脚本集合
- `Note/`：日常学习笔记
  - `programming/`：编程相关笔记
  - `math/`：数学相关笔记
- `Obsidian Vault/`：Obsidian 知识库
  - `daily/`：每日笔记
  - `projects/`：项目笔记
- `WorkDoc/`：工作相关文档
  - `meetings/`：会议记录
  - `reports/`：工作报告
- `static-page/`：示例静态网页项目
  - `index.html`：主页
  - `css/`：样式文件
  - `js/`：JavaScript 文件

## 环境要求

- Python 3.8 或更高版本
- pip（Python 包管理器）
- 推荐使用虚拟环境（virtualenv 或 conda）

## 安装说明

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. 创建并激活虚拟环境（可选但推荐）：
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate  # Windows
```

3. 安装依赖：
```bash
pip install -r requirements.txt
```

## 使用方法

### 运行 calculator

进入 `Python/calculator` 目录后，可以在命令行中执行：

```bash
python calculator.py "2 + 3"
```

支持的操作：
- 基本运算：加（+）、减（-）、乘（*）、除（/）
- 括号运算
- 支持小数和负数

若要运行单元测试：

```bash
python -m unittest
```

### 浏览静态页面

直接用浏览器打开 `static-page/index.html` 即可。

### Jupyter Notebook

仓库中的笔记本依赖常见的 Python 数据科学库，如 `pandas`、`matplotlib` 等，可按需在本地环境中安装后使用。

## 开发指南

### 代码风格

- 遵循 PEP 8 规范
- 使用类型注解
- 编写详细的文档字符串

### 提交规范

- feat: 新功能
- fix: 修复问题
- docs: 文档修改
- style: 代码格式修改
- refactor: 代码重构
- test: 测试用例修改
- chore: 其他修改

## 贡献指南

1. Fork 本仓库
2. 创建新的分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 联系方式

- 邮箱：your.email@example.com
- GitHub：[your-username](https://github.com/your-username)

