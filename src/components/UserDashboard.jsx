import React, { useState } from 'react';
import { BarChart, PieChart, LineChart, ArrowRight, Check, ChevronDown, User, Settings, Bell, Calendar, RefreshCcw, Download, Share2, Filter, Upload, Lightbulb } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { userData, userStats, previousAnalyses, salesData, productData, regionData, insights } from '../mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserDashboard = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeAnalysis, setActiveAnalysis] = useState(null);
  
  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  // Handle analysis view
  const viewAnalysis = (analysis) => {
    setActiveAnalysis(analysis);
  };
  
  // Handle upload
  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      
      // Simulate upload and processing
      setTimeout(() => {
        setIsUploading(false);
        setShowUploadModal(false);
        setSelectedFile(null);
        // In a real app, would navigate to analysis page
        alert('CSV uploaded and processing started! In a complete application, you would be taken to the analysis screen.');
      }, 2000);
    }
  };
  
  // Handle start new analysis
  const startNewAnalysis = () => {
    setShowUploadModal(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-blue-600">DataInsight AI</h1>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Analyses
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Templates
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Help Center
                </a>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button className="relative p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                </button>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <div className="ml-3 relative">
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-gray-700">{userData.name}</span>
                      <span className="text-xs text-gray-500">{userData.company}</span>
                    </div>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userData.avatar}
                      alt="User profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back, {userData.name.split(' ')[0]}!</h2>
              <p className="text-gray-600">Here's a summary of your data analyses and insights</p>
            </div>
            <div>
              <button 
                onClick={startNewAnalysis}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Upload className="-ml-1 mr-2 h-5 w-5" />
                New Analysis
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Analyses</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{userStats.totalAnalyses}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Insights Generated</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{userStats.insightsGenerated}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                    <PieChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Dashboards Created</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{userStats.dashboardsCreated}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                    <Calendar className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Last Analysis</dt>
                      <dd className="flex items-baseline">
                        <div className="text-lg font-semibold text-gray-900">{userStats.lastAnalysisDate}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Analyses */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Analyses</h3>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {previousAnalyses.map(analysis => (
                  <li key={analysis.id}>
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <div className={`h-12 w-12 rounded ${analysis.icon === 'bar' ? 'bg-blue-100' : analysis.icon === 'pie' ? 'bg-green-100' : 'bg-purple-100'} flex items-center justify-center`}>
                              {analysis.icon === 'bar' && <BarChart className="h-6 w-6 text-blue-600" />}
                              {analysis.icon === 'pie' && <PieChart className="h-6 w-6 text-green-600" />}
                              {analysis.icon === 'line' && <LineChart className="h-6 w-6 text-purple-600" />}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-blue-600">{analysis.name}</h4>
                            <p className="mt-1 text-sm text-gray-500">Created on {analysis.date} • {analysis.filename}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0">
                          <div className="flex space-x-4">
                            <button 
                              onClick={() => viewAnalysis(analysis)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              View
                            </button>
                            <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              Edit
                            </button>
                            <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Insights with Charts */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Featured Insights</h3>
              <p className="mt-1 text-sm text-gray-500">
                Key findings from your recent analyses
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart 1 */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">Monthly Sales Trend</h4>
                    <div className="text-sm text-gray-500">From Q1 Sales Analysis</div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" name="Sales" stroke="#8884d8" strokeWidth={2} />
                        <Line type="monotone" dataKey="target" name="Target" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          Sales peaked in March with a 67% increase over February, potentially due to the new product launch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart 2 */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">Product Distribution</h4>
                    <div className="text-sm text-gray-500">From Customer Segmentation</div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={productData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {productData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700">
                          Products A and B account for 60% of all sales. Consider bundling Products D and E to increase their market share.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start New Analysis Section */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Start a New Analysis</h3>
              <p className="mt-1 text-sm text-gray-500">
                Upload a new dataset or use one of our templates
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Upload New File Card */}
                <div 
                  onClick={() => setShowUploadModal(true)}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Upload New Data</h4>
                    <p className="text-sm text-gray-500 mb-4">Upload a CSV file to analyze</p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      Upload CSV
                    </button>
                  </div>
                </div>

                {/* Sales Analysis Template */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex flex-col">
                    <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Sales Analysis Template</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Pre-configured analysis for sales data with revenue tracking and forecasting
                    </p>
                    <button className="mt-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                      Use Template
                    </button>
                  </div>
                </div>

                {/* Marketing Analysis Template */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex flex-col">
                    <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Marketing Analysis Template</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Campaign performance analysis with ROI calculation and channel attribution
                    </p>
                    <button className="mt-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Upload your CSV file</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Select a CSV file to upload and analyze with our intelligent data platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <div className="border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex justify-center">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only" 
                          onChange={handleFileSelect}
                          accept=".csv"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      CSV up to 10MB
                    </p>
                    {selectedFile && (
                      <p className="text-sm text-blue-600 mt-2">
                        Selected: {selectedFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:col-start-2 sm:text-sm ${
                    selectedFile && !isUploading 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-blue-300 cursor-not-allowed'
                  }`}
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowUploadModal(false)}
                  disabled={isUploading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Analysis Detail Modal */}
      {activeAnalysis && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {activeAnalysis.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Created on {activeAnalysis.date} • File: {activeAnalysis.filename}
                      </p>
                      
                      {/* Sample chart for the analysis */}
                      <div className="mt-4 border rounded-lg p-4">
                        <div className="h-64">
                          {activeAnalysis.icon === 'bar' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsBarChart data={productData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                              </RechartsBarChart>
                            </ResponsiveContainer>
                          )}
                          
                          {activeAnalysis.icon === 'line' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsLineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" name="Actual" stroke="#8884d8" strokeWidth={2} />
                                <Line type="monotone" dataKey="target" name="Target" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
                              </RechartsLineChart>
                            </ResponsiveContainer>
                          )}
                          
                          {activeAnalysis.icon === 'pie' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsPieChart>
                                <Pie
                                  data={regionData}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                >
                                  {regionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Tooltip />
                              </RechartsPieChart>
                            </ResponsiveContainer>
                          )}
                        </div>
                      </div>
                      
                      {/* Sample insights */}
                      <div className="mt-4">
                        <h4 className="text-md font-medium text-gray-900 mb-2">Key Insights</h4>
                        <div className="space-y-3">
                          {insights
                            .filter(insight => insight.source === activeAnalysis.name)
                            .map(insight => (
                              <div key={insight.id} className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <div className="flex">
                                  <div className="flex-shrink-0">
                                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm text-yellow-700 font-medium">{insight.title}</p>
                                    <p className="text-xs text-yellow-600 mt-1">Suggested Action: {insight.action}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setActiveAnalysis(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;