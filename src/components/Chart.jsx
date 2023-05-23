// Chart.js
import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopulationData } from '../redux/slice/chartsSlice';

exporting(Highcharts);

function Chart() {
  const containerRef = useRef(null);
  const populationData = useSelector((state) => state.charts.data);
  const isLoading = useSelector((state) => state.charts.isLoading);
  const isError = useSelector((state) => state.charts.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopulationData());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isError && populationData.length > 0) {
      const chart = Highcharts.chart(containerRef.current, {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Population by Sex and Year'
        },
        xAxis: {
          categories: [1950, 1960, 1970, 1980, 1990, 2000]
        },
        yAxis: {
          title: {
            text: 'Population'
          }
        },
        series: [
          {
            name: 'Male',
            data: getPopulationDataForSex(1)
          },
          {
            name: 'Female',
            data: getPopulationDataForSex(2)
          }
        ]
      });

      return () => {
        chart.destroy();
      };
    }
  }, [isLoading, isError, populationData]);

  const getPopulationDataForSex = (sex) => {
    return [1950, 1960, 1970, 1980, 1990, 2000].map((year) => {
      const entry = populationData.find((data) => data.year === year && data.sex === sex && data.age === 20);
      return entry ? entry.people : 0; 
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return <div ref={containerRef} style={{ width: '100%', height: '400px' }} />;
}

export default Chart;
