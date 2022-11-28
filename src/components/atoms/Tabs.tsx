import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface TabsProps {
  tabs: {
    key: string | number;
    label: string;
  }[];
  content: React.ReactNode | string;
  onTabChange?: (key: string | number) => void;
  currentTab: string | number;
  subTab?: boolean;
}

interface TabButtonProps {
  sub?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabs, content, onTabChange, currentTab, subTab }) => {
  const [activeTab, setActiveTab] = useState(currentTab);

  const handleChangeTab = useCallback(
    (key: string | number) => {
      setActiveTab(key);
      if (onTabChange) onTabChange(key);
    },
    [activeTab, onTabChange],
  );

  useEffect(() => {
    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, [currentTab]);

  return (
    <MultiTabsWrapper>
      <TabButtonsWrapper>
        {tabs &&
          tabs.map((tab) => (
            <TabButton
              type="button"
              onClick={() => handleChangeTab(tab.key)}
              key={tab.key}
              className={tab.key === activeTab ? 'on' : ''}
              sub={subTab}
            >
              {tab.label}
            </TabButton>
          ))}
      </TabButtonsWrapper>
      <TabContentWrapper>{content}</TabContentWrapper>
    </MultiTabsWrapper>
  );
};

const MultiTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabButton = styled.button<TabButtonProps>`
  font-size: ${({ sub }) => (sub ? '16px' : '20px')};
  font-weight: 400;
  border: 1px solid #999;
  border-radius: 3px 3px 0 0;
  border-bottom: none;
  margin-right: 2px;
  background: none;
  color: #999;
  cursor: pointer;
  &.on {
    color: #000;
    font-weight: 600;
    border-color: #666;
  }
`;

const TabContentWrapper = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  height: 100%;
  padding: 4px;
  border-radius: 0 0 3px 3px;
  flex-direction: column;
`;

export default Tabs;
