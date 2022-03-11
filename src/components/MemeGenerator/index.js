import {Component} from 'react'
import {
  AppContainer,
  FormAndMemeGenerator,
  Heading,
  CustomLabel,
  MemeGeneratorForm,
  MemeContainer,
  TextContent,
  MemeGeneratorContainer,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  render() {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeGenerator>
            <MemeContainer
              data-testid="meme"
              backgroundImage={backgroundImageUrl}
            >
              <TextContent activeFontSizeId={activeFontSizeId}>
                {topText}
              </TextContent>
              <TextContent activeFontSizeId={activeFontSizeId}>
                {bottomText}
              </TextContent>
            </MemeContainer>
            <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
              <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
              <CustomInput
                type="text"
                value={backgroundImageUrlInput}
                onChange={this.onChangeBackgroundImage}
                id="backgroundImageUrl"
                placeholder="Enter the Image URL"
              />
              <CustomLabel htmlFor="topText">Top Text</CustomLabel>
              <CustomInput
                value={topTextInput}
                onChange={this.onChangeTopTextInput}
                type="text"
                id="topText"
                placeholder="Enter the Top Text"
              />
              <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
              <CustomInput
                value={bottomTextInput}
                onChange={this.onChangeBottomTextInput}
                type="text"
                id="bottomText"
                placeholder="Enter the Bottom Text"
              />
              <CustomLabel htmlFor="select">Font Size</CustomLabel>
              <CustomSelect
                id="select"
                value={activeFontSizeOptionId}
                onChange={this.onChangeFontSizeOptionID}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <CustomOption
                    key={eachItem.optionId}
                    value={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </CustomOption>
                ))}
              </CustomSelect>
              <GenerateButton type="submit">Generate</GenerateButton>
            </MemeGeneratorForm>
          </FormAndMemeGenerator>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
