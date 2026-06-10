import LogoIcon from '../../assets/stair.svg?react'
import StarIcon from '../../assets/star.svg?react'
import { StarContext } from '../../contexts'
import { useContext } from 'react'

type IconProps = {
    role: string,
    raiting?: number,
    id?: string
}

export const Icon = ({ role, raiting, id }: IconProps) => {
    const starMutate = useContext(StarContext)

    if(id && raiting) {
        const handleStar = () => starMutate(id, raiting)

        return (
            <div>
                {role === 'star' ? (
                    <button className='star-btn' onClick={handleStar}>
                        <StarIcon width={20} height={20} className='logo__star' />
                    </button>
                ) : (
                    <button className='star-btn' onClick={handleStar}>
                        <StarIcon width={20} height={20} className='logo__star logo__star--active' />
                    </button>
                )}
            </div>
        )
    }

    return (
        <div>
            {role === 'logo' ? (
                <div className={role}>
                    <LogoIcon width={20} height={20} className="logo__icon" />
                    <span>Eats</span>
                </div>
            ) : (
                <div className={role}>
                    <img alt="profile" src="/avatar.png" />
                </div>
            )}
        </div>
    )
}