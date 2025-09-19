// Iron Snout Fun - 游戏逻辑

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iron Snout Fun 游戏初始化中...');
    
    // 初始化游戏
    initGame();
    
    // 初始化广告
    initAds();
});

// 游戏初始化
function initGame() {
    const gameCanvas = document.getElementById('game-canvas');
    
    // 创建游戏界面
    gameCanvas.innerHTML = `
        <div class="game-interface">
            <div class="game-status">
                <div class="score">得分: <span id="score">0</span></div>
                <div class="lives">生命: <span id="lives">3</span></div>
            </div>
            <div class="game-area">
                <div class="pig-character">🐷</div>
                <div class="game-message">按空格键开始游戏！</div>
            </div>
            <div class="game-controls">
                <button id="start-btn">开始游戏</button>
                <button id="pause-btn" disabled>暂停</button>
                <button id="restart-btn">重新开始</button>
            </div>
        </div>
    `;
    
    // 添加游戏样式
    addGameStyles();
    
    // 绑定事件
    bindGameEvents();
}

// 添加游戏样式
function addGameStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .game-interface {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .game-status {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            background: #e9ecef;
            border-radius: 6px;
            margin-bottom: 1rem;
        }
        
        .score, .lives {
            font-weight: bold;
            color: #495057;
        }
        
        .game-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            background: linear-gradient(to bottom, #87CEEB, #98FB98);
            border-radius: 6px;
            margin-bottom: 1rem;
        }
        
        .pig-character {
            font-size: 3rem;
            animation: bounce 2s infinite;
        }
        
        .game-message {
            margin-top: 1rem;
            font-size: 1.1rem;
            color: #495057;
            text-align: center;
        }
        
        .game-controls {
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        
        .game-controls button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 6px;
            background: #007bff;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
        }
        
        .game-controls button:hover:not(:disabled) {
            background: #0056b3;
        }
        
        .game-controls button:disabled {
            background: #6c757d;
            cursor: not-allowed;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);
}

// 绑定游戏事件
function bindGameEvents() {
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    startBtn.addEventListener('click', startGame);
    pauseBtn.addEventListener('click', pauseGame);
    restartBtn.addEventListener('click', restartGame);
    
    // 键盘事件
    document.addEventListener('keydown', handleKeyPress);
}

// 游戏状态
let gameState = {
    isRunning: false,
    isPaused: false,
    score: 0,
    lives: 3
};

// 开始游戏
function startGame() {
    gameState.isRunning = true;
    gameState.isPaused = false;
    
    document.getElementById('start-btn').disabled = true;
    document.getElementById('pause-btn').disabled = false;
    
    const gameMessage = document.querySelector('.game-message');
    gameMessage.textContent = '使用方向键移动，空格键攻击！';
    
    console.log('游戏开始！');
}

// 暂停游戏
function pauseGame() {
    if (gameState.isRunning) {
        gameState.isPaused = !gameState.isPaused;
        const pauseBtn = document.getElementById('pause-btn');
        const gameMessage = document.querySelector('.game-message');
        
        if (gameState.isPaused) {
            pauseBtn.textContent = '继续';
            gameMessage.textContent = '游戏已暂停';
        } else {
            pauseBtn.textContent = '暂停';
            gameMessage.textContent = '使用方向键移动，空格键攻击！';
        }
    }
}

// 重新开始游戏
function restartGame() {
    gameState = {
        isRunning: false,
        isPaused: false,
        score: 0,
        lives: 3
    };
    
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
    document.getElementById('pause-btn').textContent = '暂停';
    
    document.getElementById('score').textContent = '0';
    document.getElementById('lives').textContent = '3';
    
    const gameMessage = document.querySelector('.game-message');
    gameMessage.textContent = '按空格键开始游戏！';
    
    console.log('游戏重置');
}

// 处理键盘输入
function handleKeyPress(event) {
    if (!gameState.isRunning || gameState.isPaused) return;
    
    switch(event.code) {
        case 'ArrowLeft':
            console.log('向左移动');
            break;
        case 'ArrowRight':
            console.log('向右移动');
            break;
        case 'ArrowUp':
            console.log('跳跃');
            break;
        case 'ArrowDown':
            console.log('下蹲');
            break;
        case 'Space':
            event.preventDefault();
            console.log('攻击');
            break;
    }
}

// 初始化广告
function initAds() {
    // 确保 AdSense 脚本已加载
    if (typeof adsbygoogle !== 'undefined') {
        console.log('Google AdSense 已加载');
        
        // 推送广告到队列
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            (adsbygoogle = window.adsbygoogle || []).push({});
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log('AdSense 广告已初始化');
        } catch (error) {
            console.error('AdSense 初始化错误:', error);
        }
    } else {
        console.log('等待 AdSense 脚本加载...');
        // 延迟重试
        setTimeout(initAds, 1000);
    }
}

// 游戏工具函数
function updateScore(points) {
    gameState.score += points;
    document.getElementById('score').textContent = gameState.score;
}

function updateLives(change) {
    gameState.lives += change;
    document.getElementById('lives').textContent = gameState.lives;
    
    if (gameState.lives <= 0) {
        gameOver();
    }
}

function gameOver() {
    gameState.isRunning = false;
    const gameMessage = document.querySelector('.game-message');
    gameMessage.textContent = `游戏结束！最终得分: ${gameState.score}`;
    
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
    
    console.log('游戏结束，得分:', gameState.score);
}

// 导出游戏对象（用于调试）
window.IronSnoutGame = {
    gameState,
    startGame,
    pauseGame,
    restartGame,
    updateScore,
    updateLives
};