import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>公司介绍</li>
              <li>招贤纳士</li>
              <li>联系我们</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">购物指南</h3>
            <ul className="space-y-2">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>常见问题</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">配送方式</h3>
            <ul className="space-y-2">
              <li>上门自提</li>
              <li>211限时达</li>
              <li>配送服务查询</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">售后服务</h3>
            <ul className="space-y-2">
              <li>售后政策</li>
              <li>价格保护</li>
              <li>退款说明</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 京东商城. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;