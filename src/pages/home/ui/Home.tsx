import imdbImg from '@/shared/assets/images/imdb.svg'
import moneyHeistLogo from '@/shared/assets/images/money-heist-logo.png'
import previewMoneyHeistImg from '@/shared/assets/images/preview-money-heist.jpg'
import shadowBottomImg from '@/shared/assets/images/shadow-bottom.png'
import shadowLeftImg from '@/shared/assets/images/shadow-left.png'

import { Button } from '@/shared/ui/button/Button'
import { WeekList } from '@/widgets/weekList/'
import s from './home.module.scss'

export const Home = () => {
	return (
		<>
			<div className={s.preview_movie}>
				<div className={s.preview_movie_info}>
					<img src={moneyHeistLogo} alt='money heist logo' />
					<div className={s.inner}>
						<p className={s.info_text}>
							<img src={imdbImg} alt='imdb' /> <span>8.8/10</span>
						</p>

						<p className={s.info_text}>
							<span className='red_text'>2B+</span>
							Streams
						</p>
						<div className={s.buttons}>
							<Button color='red'>Play</Button>
							<Button color='gray'>Watch Trailer</Button>
						</div>
					</div>
				</div>

				<div className={s.preview_movie_img}>
					<div className={s.shadow_left}>
						<img src={shadowLeftImg} alt='shadow left' />
					</div>
					<div className={s.shadow_bottom}>
						<img src={shadowBottomImg} alt='shadow bottom' />
					</div>

					<img
						className={s.preview_movie_}
						src={previewMoneyHeistImg}
						alt='preview Money Heist'
					/>
				</div>
			</div>

			<WeekList />

			{/* <TrendList /> */}
		</>
	)
}
