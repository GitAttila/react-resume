import React from 'react';
import StatusBarChart from '../../StatusBarChart/StatusBarChart';
import { Link } from '../../../models/link.model';
import { StatusBarChartData } from '../../../models/status-bar.model';
import ContactsList from '../../ContactList/ContactList';

const FeatureContacts: React.FC<{
  contactsList: Link[];
  chartData: StatusBarChartData;
  className?: string;
}> = ({ contactsList, chartData, className }) => {
  return (
    <div className={`ah-flex ${className || ''}`}>
      <div className="ah-flex__child--50">
        <StatusBarChart title={chartData.title} values={chartData.values} />
      </div>
      <div className="ah-flex__child--50">
        <ContactsList title="contact" contacts={contactsList} />
      </div>
    </div>
  );
};

export default FeatureContacts;
