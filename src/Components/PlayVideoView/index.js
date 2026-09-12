import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const publishedTimeToNow = formatDistanceToNow(
    new Date(videoDetails.publishedAt),
  )

  // EXACT hex colors required by the test cases
  const activeColor = '#2563eb'
  const inactiveColor = '#64748b'

  const likeIconColor = isLiked ? activeColor : inactiveColor
  const dislikeIconColor = isDisLiked ? activeColor : inactiveColor

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? activeColor : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {publishedTimeToNow}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={likeIconColor}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText color={likeIconColor}>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={dislikeIconColor}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText color={dislikeIconColor}>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText color={saveIconColor}>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>

              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
            </ChannelContainer>
            <ChannelInfo>
              <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
              <ChannelSubscribers color={textColor}>
                {videoDetails.subscriberCount} Subscribers
              </ChannelSubscribers>
              <ChannelDescription color={textColor}>
                {videoDetails.description}
              </ChannelDescription>
            </ChannelInfo>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView