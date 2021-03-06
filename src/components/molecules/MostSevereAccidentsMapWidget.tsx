import React, { FunctionComponent } from 'react';
import LocationMap from './LocationMap';
import { IWidgetMostSevereAccidents } from '../../models/WidgetData';

const CENTER = { lat: 32.0853, lng: 34.7818 };

interface IProps {
  data: IWidgetMostSevereAccidents[]
}
const MostSevereAccidentsMapWidget: FunctionComponent<IProps> = ( { data } ) => {

  return <LocationMap data={ data } center={ CENTER } />;
};
export default MostSevereAccidentsMapWidget;
