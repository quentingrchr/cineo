import React from 'react';
import Number from '../../components/top5/top5.component';
import { ReactComponent as One } from '../../assets/svg/1.svg';
import { ReactComponent as Two } from '../../assets/svg/2.svg';
import { ReactComponent as Three } from '../../assets/svg/3.svg';
import { ReactComponent as Four } from '../../assets/svg/4.svg';
import { ReactComponent as Five } from '../../assets/svg/5.svg';

export default class TopFive extends React.Component {
  render() {
    return (
      <section className='topFive'>
        <Number src={this.props.src[5].posterUrl}>
          <One />
        </Number>
        <Number src={this.props.src[3].posterUrl}>
          <Two />
        </Number>
        <Number src={this.props.src[2].posterUrl}>
          <Three />
        </Number>
        <Number src={this.props.src[6].posterUrl}>
          <Four />
        </Number>
        <Number src={this.props.src[1].posterUrl}>
          <Five />
        </Number>
      </section>
    );
  }
}
