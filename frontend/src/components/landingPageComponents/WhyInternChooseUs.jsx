import { Card, CardContent, CardHeader, CardTitle } from '../Cart';

const WhyInternChooseUs = () => {
  return (
              <div className="container mx-auto px-4">
            <h2 className="  text-center  text-6xl font-bold text-gray-900 mb-6">Why Interns Choose Our Platform</h2>
            <p className="text-2xl text-gray-600 max-w-3xl  mx-auto text-center mb-10">Experience the most sophisticated fundraising platform
              designed exclusively for ambitious student professionals</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all
                   duration-500 border border-gray-100 group hover:-translate-y-2"><div className="bg-gradient-to-r from-violet-600
                    to-violet-900 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform 
                    duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidthh="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-white" aria-hidden="true">
                        <path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg></div><h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Analytics</h3>
                    <p className="text-gray-600 leading-relaxed">Leverage machine learning insights with predictive analytics, behavioral tracking,
                      and personalized recommendations to optimize your fundraising strategy.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wide Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2"><div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-5 w-20 h-20 
                mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"
                        className="lucide lucide-shield text-white" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Recognition System</h3>
                    <p className="text-gray-600 leading-relaxed">Earn prestigious badges, unlock exclusive rewards, and gain industry recognition through our
                      comprehensive achievement framework.</p></div>

                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wide Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500 border
                   border-gray-100 group hover:-translate-y-2"><div className="bg-gradient-to-r from-violet-600 to-violet-900 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex 
                   items-center justify-center group-hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-lightbulb text-white" aria-hidden="true">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                        <path d="M9 18h6"></path><path d="M10 22h4"></path></svg></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship Network</h3>
                    <p className="text-gray-600 leading-relaxed">Connect with industry leaders, participate in exclusive masterclasses, and accelerate
                      your career through our premium mentorship program.</p></div>
                </CardContent>
              </Card>
            </div>
          </div>
  )
}

export default WhyInternChooseUs