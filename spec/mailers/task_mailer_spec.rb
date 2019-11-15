require 'rails_helper'

describe UserMailer, type: :mailer do
  let(:user_a) { FactoryBot.create(:user, name: 'ユーザーA', email: 'a@example.com') }
  let(:text_body) do
    part = mail.body.parts.detect { |part| part.content_type == 'text/plain; charset=UTF-8' }
    part.body.raw_source
  end
  let(:html_body) do
    part = mail.body.parts.detect { |part| part.content_type == 'text/html; charset=UTF-8' }
    part.body.raw_source
  end

  describe "#creation_email" do
    let(:mail) { UserMailer.account_activation(user_a) }

    it '想定どおりのメールが生成されている' do

      # text形式の本文
      expect(text_body).to match('ユーザーA')
      expect(text_body).to match('下記URLクリックでアカウント有効化します。クリックしてください')


      # html形式の本文
      expect(html_body).to match('ユーザーA')
      expect(html_body).to match('下記URLクリックでアカウント有効化します。クリックしてください')

    end
  end
end
